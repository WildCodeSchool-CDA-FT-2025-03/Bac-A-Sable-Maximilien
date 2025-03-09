# Bac-A-Sable-Maximilien

# GitHub Repository Management API

This API provides endpoints to manage GitHub repository information with curl examples for each operation.

## Base URL

## API Endpoints with curl Examples

### Server Status Check

```bash
# Check server status
curl -X GET http://localhost:3000/
```

### Repository Operations

#### Get All Repositories

```bash
# Get all repositories
curl -X GET http://localhost:3000/repos

# Filter by languages and privacy status
curl -X GET "http://localhost:3000/repos?languages=TypeScript,JavaScript&isPrivate=false"

# Get specific fields with pagination
curl -X GET "http://localhost:3000/repos?fields=id,url&count=10&page=0"
```

#### Get Repository by ID

```bash
# Get a specific repository by ID
curl -X GET http://localhost:3000/repos/123
```

#### Add New Repository

```bash
# Create a new repository
curl -X POST http://localhost:3000/repos \
  -H "Content-Type: application/json" \
  -d '{
    "user": "john-doe",
    "name": "awesome-project",
    "isPrivate": false
  }'
```

#### Update Repository

```bash
# Update a repository
curl -X PUT http://localhost:3000/repos/123 \
  -H "Content-Type: application/json" \
  -d '{
    "isPrivate": true,
    "languages": [
      { "size": 2000, "node": { "name": "Rust" } }
    ]
  }'
```

#### Delete Repository

```bash
# Delete a repository
curl -X DELETE http://localhost:3000/repos/123
```

