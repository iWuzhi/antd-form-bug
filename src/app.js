
import React from 'react';
import { Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

const FormItemLayout = {
  labelCol: { span: 4},
  wrapperCol: { span: 12}
}
const FormTest =  ({ form }) => {
  const { getFieldDecorator } = form;
  return (
    <Form {...FormItemLayout} labelAlign='left' >
      <FormItem label='nodeName'>
        {
          getFieldDecorator('nodeName', {})(
            <Input />
          )
        }
      </FormItem>
      <FormItem label='select'>
        {
          getFieldDecorator('select', {})(
            <Select>
              <Option value='1'>1</Option>
              <Option value='2'>2</Option>
            </Select>
          )
        }
      </FormItem>
      <FormItem label='nodeName'>
        {
          getFieldDecorator('nodeName2', {})(
            <Input />
          )
        }
      </FormItem>
    </Form>
  )
}

export default Form.create()(FormTest);