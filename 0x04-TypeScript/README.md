# TypeScript Project

This project contains various TypeScript exercises demonstrating different concepts and features of TypeScript.

## Project Structure

- `task_0/` - Student interface and table rendering
- `task_1/` - Teacher interface and related classes
- `task_2/` - Director/Teacher interfaces and functions
- `task_3/` - Ambient namespaces and CRUD operations
- `task_4/` - Namespace and declaration merging
- `task_5/` - Brand convention and nominal typing

## Requirements

- Node.js
- TypeScript 3.6.4
- Webpack 4.41.2
- Jest 24.9.0

## Installation

For each task directory, run:

```bash
npm install
```

## Running the Projects

### Development Mode
```bash
npm run start-dev
```

### Build
```bash
npm run build
```

### Testing
```bash
npm test
```

## Task Descriptions

### Task 0: Student Interface
- Creates a Student interface with firstName, lastName, age, and location
- Implements table rendering using Vanilla JavaScript
- Demonstrates basic TypeScript interfaces and DOM manipulation

### Task 1: Teacher Interface
- Creates a Teacher interface with readonly properties and optional fields
- Extends Teacher interface to create Directors interface
- Implements printTeacher function and StudentClass
- Demonstrates interface inheritance and class implementation

### Task 2: Advanced Types
- Creates Director and Teacher interfaces with specific methods
- Implements factory function createEmployee with union types
- Uses type predicates for type narrowing
- Demonstrates string literal types

### Task 3: Ambient Namespaces
- Creates type definitions for CRUD operations
- Uses ambient declarations for external JavaScript libraries
- Demonstrates triple-slash directives and module imports

### Task 4: Namespace & Declaration Merging
- Creates a Subjects namespace with multiple interfaces and classes
- Uses declaration merging to extend Teacher interface
- Implements inheritance with Subject base class
- Demonstrates namespace organization and interface extension

### Task 5: Brand Convention & Nominal Typing
- Creates branded interfaces for MajorCredits and MinorCredits
- Implements type-safe credit calculation functions
- Demonstrates nominal typing using brand properties

## Configuration Files

Each task includes:
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript compiler configuration
- `webpack.config.js` - Webpack bundling configuration
- `.eslintrc.js` - ESLint configuration (where applicable)

## TypeScript Features Demonstrated

- Interfaces and type definitions
- Class implementation and inheritance
- Union types and type guards
- String literal types
- Ambient declarations
- Namespaces and declaration merging
- Branded types for nominal typing
- Module imports and exports
- Triple-slash directives
