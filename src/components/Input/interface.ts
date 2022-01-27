export interface IProps {
    label: string;
    type: string;
    placeholder?: string;
    value?: string | number;
    handleChange: any;
}

export interface IEvent {
    target:{
        value: string|number;
    }
}