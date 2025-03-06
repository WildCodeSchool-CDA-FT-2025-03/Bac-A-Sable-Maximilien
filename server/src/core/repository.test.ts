import repository, {GitHubRepository, Repositorys} from "./repository";


const repos: Repositorys = [];

const r1: GitHubRepository = {
    id: "foo",
    isPrivate: false,
    languages: [
        {
            node: {name: "rust"},
            size: 510,
        },
        {
            node: {name: "python"},
            size: 120,
        },
    ],
    url: "foo@bar.com",
};

test("repository: exist - false", () => {
    expect(repos.length).toBe(0);

    const result = repository.exist(repos, r1);
    expect(result).toBe(false);
});

test("repository: add", () => {
    {
        const result = repository.add(repos, r1);
        expect(result).toBe(true);
        expect(repos.length).toBe(1);
    }
    {
        const result = repository.add(repos, r1);
        expect(result).toBe(false);
        expect(repos.length).toBe(1);
    }
});

test("repository: findId", () => {
    {    const result = repository.findId(repos, "foo");
        expect(result).not.toBeUndefined();
    }
    {    const result = repository.findId(repos, "bar");
        expect(result).toBeUndefined();
    }
});

test("repository: filter", () => {
    {    
        const result = repository.filter(repos, {id: "foo", "isPrivate": false});
        expect(result.length).toBe(1);
    }
    {    
        const result = repository.filter(repos, {id: "bar", "isPrivate": false});
        expect(result.length).toBe(0);
    }
});

test("repository: filter - languages", () => {
    {    
        const result = repository.filter(repos, {languages: "rust"});
        expect(result.length).toBe(1);
    }
    {    
        const result = repository.filter(repos, {languages: "rust,python"});
        expect(result.length).toBe(1);
    }
    {    
        const result = repository.filter(repos, {languages: "foo"});
        expect(result.length).toBe(0);
    }
});


test("repository: filter", () => {
    {    
        const result = repository.selectFields(repos, ["id"]);
        expect(result.length).toBe(1);
        expect(Object.keys(result[0]).length).toBe(1);
        expect(Object.keys(result[0])[0]).toBe("id");
    }
    {    
        const result = repository.selectFields(repos, ["id", "url"]);
        expect(result.length).toBe(1);
        expect(Object.keys(result[0]).length).toBe(2);
        expect(Object.keys(result[0])[0]).toBe("id");
        expect(Object.keys(result[0])[1]).toBe("url");
    }
});

test("repository: delete", () => {
    {    
        expect(repos.length).toBe(1);
        repository.deleteByID(repos, "foo");
        expect(repos.length).toBe(0);
    }
});