### Installation
You need to install cli globally
```
$ npm install react-redux-component-cli -g
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
rrcc show-commands
```
#### set custom config
You can change any amount of params value from default config 
```
rrcc config --compDirPath src/comps --hocCompDirPath src/comps/hocs --stylesDirPath src/comps 
```

#### reset config to initial values
```
rrcc reset-config
```

All 'make' commands accept --dir and --comp arguments. --comp argument is required and is used as a component name and component filename.
--dir argument creates a directory with a given name if not exists, can be omitted.
#### create class component
```
rrcc make-class-comp --dir Test --comp TestComp
```
#### create class component with redux connected
```
rrcc make-class-comp-with-redux --dir Test --comp TestComp
```
#### create context component
```
rrcc make-context --dir Test --comp TestComp
```
#### create functional component
```
rrcc make-func-comp --dir Test --comp TestComp
```
#### create functional component with redux connected
```
rrcc make-func-comp-with-redux --dir Test --comp TestComp
```
#### create HOC component
```
rrcc make-hoc-comp --dir Test --comp TestComp
```
#### create HOC component with redux connected
```
rrcc make-hoc-comp-with-redux --dir Test --comp TestComp
```
#### create redux middleware
```
rrcc make-redux-middleware --comp TestComp
```
#### create redux reducer
```
rrcc make-redux-reducer --dir Test --comp TestComp
```
#### create scss file
```
rrcc make-scss-file --dir Test --name TestStyles
```
