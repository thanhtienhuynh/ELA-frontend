import React from './node_modules/react'
import { Button, Modal } from './node_modules/semantic-ui-react'
import FormLogin from '../FormLogin/FormLogin'

const ButtonLogin = () => (
    <Modal trigger={<Button>Login</Button>} style={{ 'width': '40em'}}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content >
            <FormLogin />
        </Modal.Content>
    </Modal>
)

export default ButtonLogin