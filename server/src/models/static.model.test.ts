import { StaticModel } from './static.model';
import { 
  ConstructGitHubRepository, 
  GetRepositorysConfig, 
  GitHubRepository,
  RepositoryFields,
  UpdateRepository
} from '@/core/repository';
import { create_url, createID } from '@/core/repository';

// Mock the static data import
jest.mock('@/datas/static_data.json', () => {
  return [
    {
      id: '123',
      isPrivate: false,
      languages: [
        { size: 1000, node: { name: 'TypeScript' } },
        { size: 500, node: { name: 'JavaScript' } }
      ],
      url: 'https://github.com/user1/repo1'
    },
    {
      id: '456',
      isPrivate: true,
      languages: [
        { size: 800, node: { name: 'Python' } },
        { size: 200, node: { name: 'TypeScript' } }
      ],
      url: 'https://github.com/user2/repo2'
    }
  ];
});

describe('StaticModel', () => {
  let staticModel: StaticModel;
  
  beforeEach(() => {
    // Clear module cache to reset static repository array
    jest.resetModules();
    staticModel = new StaticModel();
  });

  describe('add method', () => {
    it('should successfully add a new repository', async () => {
      // Arrange
      const newRepo: ConstructGitHubRepository = {
        user: 'testuser',
        name: 'testrepo',
        isPrivate: false
      };
      
      // Act
      const id = await staticModel.add(newRepo);
      
      // Assert
      expect(id).toBe(createID(create_url(newRepo.user, newRepo.name)));
      
      // Verify the repository was added
      const config = new GetRepositorysConfig();
      config.filter.id = id;
      const repos = await staticModel.get(config);
      
      expect(repos).toHaveLength(1);
      expect((repos[0] as GitHubRepository).id).toBe(id);
      expect((repos[0] as GitHubRepository).url).toBe(create_url(newRepo.user, newRepo.name));
      expect((repos[0] as GitHubRepository).isPrivate).toBe(newRepo.isPrivate);
      expect((repos[0] as GitHubRepository).languages).toEqual([]);
    });
    
    it('should return empty string when adding an existing repository', async () => {
      // Arrange
      const newRepo: ConstructGitHubRepository = {
        user: 'testuser',
        name: 'testrepo',
        isPrivate: false
      };
      
      // Act - Try to add the same repository again
      const id = await staticModel.add(newRepo);
      
      // Assert
      expect(id).toBe('');
    });
  });

  describe('get method', () => {
    it('should return all repositories when no filters are provided', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(3);
    });
    
    it('should filter repositories by id', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.filter.id = '123';
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(1);
      expect((repos[0] as GitHubRepository).id).toBe('123');
    });
    
    it('should filter repositories by isPrivate', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.filter.isPrivate = 'true';
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(1);
      expect((repos[0] as GitHubRepository).isPrivate).toBe(true);
    });
    
    it('should filter repositories by url', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.filter.url = 'https://github.com/user1/repo1';
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(1);
      expect((repos[0] as GitHubRepository).url).toBe('https://github.com/user1/repo1');
    });
    
    it('should filter repositories by languages', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.filter.languages = 'Python';
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(1);
      expect((repos[0] as GitHubRepository).id).toBe('456');
    });
    
    it('should filter repositories by multiple languages', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.filter.languages = 'TypeScript,JavaScript';
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(1);
      expect((repos[0] as GitHubRepository).id).toBe('123');
    });
    
    it('should return selected fields when fields are specified', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.fields = ['id', 'url'] as RepositoryFields[];
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(3);
      expect(Object.keys(repos[0])).toEqual(['id', 'url']);
      expect(Object.keys(repos[1])).toEqual(['id', 'url']);
      expect(Object.keys(repos[2])).toEqual(['id', 'url']);
    });
    
    it('should apply pagination correctly', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.limit = { count: 1, page: 0 };
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(1);
      expect((repos[0] as GitHubRepository).id).toBe('123');
      
      // Test second page
      config.limit = { count: 1, page: 1 };
      const reposPage2 = await staticModel.get(config);
      
      expect(reposPage2).toHaveLength(1);
      expect((reposPage2[0] as GitHubRepository).id).toBe('456');
    });
    
    it('should combine filters, fields, and pagination', async () => {
      // Arrange
      const config = new GetRepositorysConfig();
      config.fields = ['id', 'url'] as RepositoryFields[];
      config.limit = { count: 1, page: 0 };
      
      // Act
      const repos = await staticModel.get(config);
      
      // Assert
      expect(repos).toHaveLength(1);
      expect(Object.keys(repos[0])).toEqual(['id', 'url']);
      expect((repos[0] as GitHubRepository).id).toBe('123');
    });
  });

  describe('removeByID method', () => {
    it('should remove repositories by ID and return the count', async () => {
      // Arrange
      const idsToRemove = ['123'];
      
      // Act
      const removedCount = await staticModel.removeByID(idsToRemove);
      
      // Assert
      expect(removedCount).toBe(1);
      
      // Verify repository was removed
      const config = new GetRepositorysConfig();
      const repos = await staticModel.get(config);
      expect(repos).toHaveLength(2);
      expect((repos[0] as GitHubRepository).id).toBe('456');
    });
    
    /*
    it('should remove multiple repositories by ID', async () => {
      // Arrange
      const idsToRemove = ['123', '456'];
      
      // Act
      const removedCount = await staticModel.removeByID(idsToRemove);
      
      // Assert
      expect(removedCount).toBe(2);
      
      // Verify all repositories were removed
      const config = new GetRepositorysConfig();
      const repos = await staticModel.get(config);
      expect(repos).toHaveLength(0);
    });*/
    
    
    it('should return 0 when trying to remove non-existent repositories', async () => {
      // Arrange
      const idsToRemove = ['999'];
      
      // Act
      const removedCount = await staticModel.removeByID(idsToRemove);
      
      // Assert
      expect(removedCount).toBe(0);
      
      // Verify no repositories were removed
      const config = new GetRepositorysConfig();
      const repos = await staticModel.get(config);
      expect(repos).toHaveLength(2);
    });
  });

  describe('existByID method', () => {
    it('should return true when repository exists', async () => {
      // Act
      const exists = await staticModel.existByID('456');
      
      // Assert
      expect(exists).toBe(true);
    });
    
    it('should return false when repository does not exist', async () => {
      // Act
      const exists = await staticModel.existByID('999');
      
      // Assert
      expect(exists).toBe(false);
    });
  });

  describe('updateByID method', () => {
    it('should update repository fields and return true', async () => {
      // Arrange
      const updateFields: UpdateRepository = {
        isPrivate: true,
        languages: [
          { size: 2000, node: { name: 'Rust' } }
        ]
      };
      
      // Act
      const result = await staticModel.updateByID('456', updateFields);
      
      // Assert
      expect(result).toBe(true);
      
      // Verify repository was updated
      const config = new GetRepositorysConfig();
      config.filter.id = '456';
      const repos = await staticModel.get(config);
      
      expect((repos[0] as GitHubRepository).isPrivate).toBe(true);
      expect((repos[0] as GitHubRepository).languages).toEqual([
        { size: 2000, node: { name: 'Rust' } }
      ]);
    });
    
    it('should return false when updating non-existent repository', async () => {
      // Arrange
      const updateFields: UpdateRepository = {
        isPrivate: true
      };
      
      // Act
      const result = await staticModel.updateByID('999', updateFields);
      
      // Assert
      expect(result).toBe(false);
    });
  });

  // Test for edge cases and potential bugs

  it('should handle empty array of languages in filter', async () => {
    // Arrange
    const config = new GetRepositorysConfig();
    config.filter.languages = '';
    
    // Act
    const repos = await staticModel.get(config);
    
    // Assert - should return all repositories
    expect(repos).toHaveLength(2);
  });

  it('should handle pagination beyond available items', async () => {
    // Arrange
    const config = new GetRepositorysConfig();
    config.limit = { count: 1, page: 10 };
    
    // Act
    const repos = await staticModel.get(config);
    
    // Assert - should return empty array
    expect(repos).toHaveLength(0);
  });

  it('should handle adding a repository with same URL but different casing', async () => {
    // This test ensures the URL comparison is case-sensitive as expected
    // Arrange
    const newRepo: ConstructGitHubRepository = {
      user: 'USER1',  // Uppercase version of existing user
      name: 'repo1',
      isPrivate: false
    };
    
    // Act
    const id = await staticModel.add(newRepo);
    
    // Assert - should create a new repository since URLs are different
    expect(id).not.toBe('');
    expect(id).not.toBe('123');
  });
});