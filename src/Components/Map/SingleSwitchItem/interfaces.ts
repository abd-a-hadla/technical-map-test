export interface ISingleSwitchProps {
    label: string
    onSwitchChange: (checked: boolean) => void
    defaultChecked:boolean
}