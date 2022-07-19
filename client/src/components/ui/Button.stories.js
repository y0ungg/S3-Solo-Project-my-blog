import ButtonUI from './Button';

export default {
    title: "solo-project",
    component: ButtonUI,
    argTypes: {
        title: {control: "text"}
    }
}

const Template = (args) => <ButtonUI {...args}/>

export const CancelBtn = Template.bind({})

CancelBtn.args = {
    title: "cancel",
}

export const WriteBtn = Template.bind({})

WriteBtn.args = {
    title: "write"
}