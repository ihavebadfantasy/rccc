### Installation
```
$ npm install use-update
```

or

```
$ yarn add use-update
```


### Default config values
|Param|Value|
|---|---|
|compDirPath|src/components|
|hocCompDirPath|src/components/HOC|
|stylesDirPath|src/styles|
|reduxDirPath|src/store|
|middlewaresDirPath|src/middlewares|
|contextDirPath|src/contexts|

### Commands
#### show commands
```
npx rrcc show-commands
```
#### set custom config
You can change any amount of params value from default config 
```
npx rrcc config -- --compDirPath src/comps --hocCompDirPath src/comps/hocs --stylesDirPath src/comps 
```

#### reset config to initial values
```
npx rrcc reset-config
```

All 'make' commands accept --dir and --comp arguments. --comp argument is required and is used as a component name and component filename.
--dir argument creates a directory with a given name if not exists, can be omitted.
#### create class component
```
npx rrcc make-class-comp -- --dir Test --comp TestComp
```
#### create class component with redux connected
```
npx rrcc make-class-comp-with-redux -- --dir Test --comp TestComp
```
#### create context component
```
npx rrcc make-context --dir Test --comp TestComp
```
#### create functional component
```
npx rrcc make-func-comp --dir Test --comp TestComp
```
#### create functional component with redux connected
```
npx rrcc make-func-comp-with-redux --dir Test --comp TestComp
```
#### create HOC component
```
npx rrcc make-hoc-comp --dir Test --comp TestComp
```
#### create HOC component with redux connected
```
npx rrcc make-hoc-comp-with-redux --dir Test --comp TestComp
```
#### create redux middleware
```
npx rrcc make-redux-middleware --comp TestComp
```
#### create redux reducer
```
npx rrcc make-redux-reducer --dir Test --comp TestComp
```
#### create scss file
```
npx rrcc make-scss-file --dir Test --name TestStyles
```
