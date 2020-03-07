

# antd-form#bug

### Start

1. git clone git@github.com:iWuzhi/antd-form-bug.git
2. cd antd-form-bug
3. npm i
4. npm start

### Bug

1. error message:
```
Uncaught TypeError: element.nodeName.toLowerCase is not a function
```

2. when: 
  
  *  use 'nodeName' as Form.getFieldDecorator field
  * add a Select component
  * change the Select value
