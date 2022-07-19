import TextInput from './TextInput'

export default {
    title: "solo-project", 
    component: TextInput,
    argTypes: {
        title: { control: "text" },
        fontSize: {control: "number"},
        height: {control: "number"}
    }
}

const Template = (args) => <TextInput {...args} />

export const TitleTextInput = Template.bind({});

TitleTextInput.args = {
    title: "title",
    fontSize: 20,
    height: 20
}
export const ContentTextInput = Template.bind({});

ContentTextInput.args = {
    title: "content",
    fontSize: 10,
    height: 50
}