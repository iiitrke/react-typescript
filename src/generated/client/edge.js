
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TestModelScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  compoundId: 'compoundId',
  userId: 'userId',
  providerType: 'providerType',
  providerId: 'providerId',
  providerAccountId: 'providerAccountId',
  refreshToken: 'refreshToken',
  accessToken: 'accessToken',
  accessTokenExpires: 'accessTokenExpires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  expires: 'expires',
  sessionToken: 'sessionToken',
  accessToken: 'accessToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationRequestScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.IntroScalarFieldEnum = {
  id: 'id',
  image: 'image',
  title: 'title',
  desc: 'desc'
};

exports.Prisma.FeaturedCourseScalarFieldEnum = {
  id: 'id',
  image: 'image',
  link: 'link',
  desc: 'desc'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  TestModel: 'TestModel',
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationRequest: 'VerificationRequest',
  Intro: 'Intro',
  FeaturedCourse: 'FeaturedCourse'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/nandinibhardwaj/software-development/react-simple-projects/react-typescript/src/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "darwin-arm64"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAiZGFyd2luLWFybTY0Il0KICAgIG91dHB1dCAgID0gIi4uL3NyYy9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgoKbW9kZWwgVGVzdE1vZGVsIHsKICBpZCBJbnQgICAgICAgIEBpZAogIG5hbWUgU3RyaW5nCn0KIAoKCgoKCm1vZGVsIEFjY291bnQgewogIGlkICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAaWQKICBjb21wb3VuZElkICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUgQG1hcChuYW1lOiAiY29tcG91bmRfaWQiKQogIHVzZXJJZCAgICAgICAgICAgICBJbnQgICAgICAgQG1hcChuYW1lOiAidXNlcl9pZCIpCiAgcHJvdmlkZXJUeXBlICAgICAgIFN0cmluZyAgICBAbWFwKG5hbWU6ICJwcm92aWRlcl90eXBlIikKICBwcm92aWRlcklkICAgICAgICAgU3RyaW5nICAgIEBtYXAobmFtZTogInByb3ZpZGVyX2lkIikKICBwcm92aWRlckFjY291bnRJZCAgU3RyaW5nICAgIEBtYXAobmFtZTogInByb3ZpZGVyX2FjY291bnRfaWQiKQogIHJlZnJlc2hUb2tlbiAgICAgICBTdHJpbmc/ICAgQG1hcChuYW1lOiAicmVmcmVzaF90b2tlbiIpCiAgYWNjZXNzVG9rZW4gICAgICAgIFN0cmluZz8gICBAbWFwKG5hbWU6ICJhY2Nlc3NfdG9rZW4iKQogIGFjY2Vzc1Rva2VuRXhwaXJlcyBEYXRlVGltZT8gQG1hcChuYW1lOiAiYWNjZXNzX3Rva2VuX2V4cGlyZXMiKQogIGNyZWF0ZWRBdCAgICAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAobmFtZTogImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAobmFtZTogInVwZGF0ZWRfYXQiKQoKICBAQGluZGV4KFtwcm92aWRlckFjY291bnRJZF0sIG5hbWU6ICJwcm92aWRlckFjY291bnRJZCIpCiAgQEBpbmRleChbcHJvdmlkZXJJZF0sIG5hbWU6ICJwcm92aWRlcklkIikKICBAQGluZGV4KFt1c2VySWRdLCBuYW1lOiAidXNlcklkIikKCiAgQEBtYXAobmFtZTogImFjY291bnRzIikKfQoKbW9kZWwgU2Vzc2lvbiB7CiAgaWQgICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgdXNlcklkICAgICAgIEludCAgICAgIEBtYXAobmFtZTogInVzZXJfaWQiKQogIGV4cGlyZXMgICAgICBEYXRlVGltZQogIHNlc3Npb25Ub2tlbiBTdHJpbmcgICBAdW5pcXVlIEBtYXAobmFtZTogInNlc3Npb25fdG9rZW4iKQogIGFjY2Vzc1Rva2VuICBTdHJpbmcgICBAdW5pcXVlIEBtYXAobmFtZTogImFjY2Vzc190b2tlbiIpCiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKG5hbWU6ICJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAobmFtZTogInVwZGF0ZWRfYXQiKQoKICBAQG1hcChuYW1lOiAic2Vzc2lvbnMiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIG5hbWUgICAgICAgICAgU3RyaW5nPwogIGVtYWlsICAgICAgICAgU3RyaW5nPyAgIEB1bmlxdWUKICBwYXNzd29yZCAgICAgIFN0cmluZz8KICBlbWFpbFZlcmlmaWVkIERhdGVUaW1lPyBAbWFwKG5hbWU6ICJlbWFpbF92ZXJpZmllZCIpCiAgaW1hZ2UgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAobmFtZTogImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKG5hbWU6ICJ1cGRhdGVkX2F0IikKCiAgQEBtYXAobmFtZTogInVzZXJzIikKfQoKbW9kZWwgVmVyaWZpY2F0aW9uUmVxdWVzdCB7CiAgaWQgICAgICAgICBJbnQgICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIGlkZW50aWZpZXIgU3RyaW5nCiAgdG9rZW4gICAgICBTdHJpbmcgICBAdW5pcXVlCiAgZXhwaXJlcyAgICBEYXRlVGltZQogIGNyZWF0ZWRBdCAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKG5hbWU6ICJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcChuYW1lOiAidXBkYXRlZF9hdCIpCgogIEBAbWFwKG5hbWU6ICJ2ZXJpZmljYXRpb25fcmVxdWVzdHMiKQp9CgoKCm1vZGVsIEludHJvIHsKICBpZCAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGlkCiAgaW1hZ2UgU3RyaW5nCiAgdGl0bGUgU3RyaW5nCiAgZGVzYyAgICAgIFN0cmluZyAgIAoKICBAQG1hcChuYW1lOiAiaW50cm8iKQp9Cgptb2RlbCBGZWF0dXJlZENvdXJzZSB7CiAgaWQgICAgICAgICBJbnQgICAgICBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBpZAogIGltYWdlIFN0cmluZwogIGxpbmsgU3RyaW5nCiAgZGVzYyAgICAgIFN0cmluZyAgIAoKICBAQG1hcChuYW1lOiAiZmVhdHVyZWRjb3Vyc2UiKQp9",
  "inlineSchemaHash": "b3e7a11b2da39d087e170332715c2e94bc60e5dc8999dbae7eba89654d69175f"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"TestModel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Account\":{\"dbName\":\"accounts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compoundId\",\"dbName\":\"compound_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerType\",\"dbName\":\"provider_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"dbName\":\"provider_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerAccountId\",\"dbName\":\"provider_account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshToken\",\"dbName\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessToken\",\"dbName\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessTokenExpires\",\"dbName\":\"access_token_expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":\"sessions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionToken\",\"dbName\":\"session_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessToken\",\"dbName\":\"access_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"dbName\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VerificationRequest\":{\"dbName\":\"verification_requests\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Intro\":{\"dbName\":\"intro\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FeaturedCourse\":{\"dbName\":\"featuredcourse\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

