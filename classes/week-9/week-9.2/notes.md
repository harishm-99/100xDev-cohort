## WHat is TypeScript?

- TS is a strict syntactical superset of JS and adds optional static typing to the language.

## WHere/How does TS code run?

- It never runs in the browser. Browseronly unxderstands JS.
- JS is the runtime lang. that actually runs in the browser/nodejs runtime
- TS is compiled down to js while running.
- WHen compiling doen to js, it gets type checking like strongly typed lang. C++.
- If thereis an error the conversion to JS fails.

## TSC compiler

- tsc is the official ts compiler that converts ts code to js.
- There are also other compilers/transpilers that helps in converting ts to js code. Examples are:-

1. esbuild
2. swc

# Installation process

1. npm i -g typescript
2. cd to the folder
3. npm init -y// initializing node js file package.json
4. npx tsc --init/ tsc --init.// initializing tsc file
5. tsc -b //compiling the tsc file - if not?
6. npm i -g typescript (Again install typescript)
7. tsc -b //again compile

ts file with js file is ready

# Support versions

es6 and latest ecmascript versions like es2020 not supported by internet explorer

ts compiler can compile code in newer versions like es 2016 or es2020. However, they can also compile older version codes. like es5

This configuration can be made in target of tscongig.json file.

## structuring files in categorized folders

build/dist(destination) folder -> .js build files
src folder -> .ts original files

we can change the location of the .js files in 'outDir' in Modules section of 'tsconfig.json' also the .ts files src location can bementioned in 'rootDir' of 'Modules' section.

# We need to uncomment these lines of code.

# Important configurations:-

1. target
2. rootDir
3. outDir
4. noImplicitAny
5. removeComments
