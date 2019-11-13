import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Icon } from 'antd';
const { TextArea } = Input;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="day:">
              {getFieldDecorator('time')(<Input rows={4} type="text" />)}
            </Form.Item>
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<TextArea rows={4} />)}
            </Form.Item>
            <Form.Item label="Skill">{getFieldDecorator('skill')(<Input type="text" />)}</Form.Item>
            <Form.Item label="Url">
              {getFieldDecorator('url')(<Input addonBefore="Http://" defaultValue="mysite" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.onSubmit(values);

      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{ marginLeft: 500, height: 'auto', whiteSpace: 'nowrap', fontSize: '18px' }}
        >
          <Icon type="plus-circle" style={{ fontSize: '38px' }} />
          Add Time line
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default AddPost;
