import classnames from 'classnames'
interface Props {
    booleanInput: boolean,
    label?: string,
    valueReplacement?: any
}
export default function BooleanDisplay({ booleanInput, label, valueReplacement }: Props) {
    return <>
        <span className={
            classnames('text-white', {
                'bg-red-600 shadow-red-900': booleanInput,
                'bg-lime-600 shadow-lime-900': !booleanInput,
            })
        }>{(label ?? 'value') + ':'}</span>
        <span>
            {valueReplacement ?? booleanInput}
        </span>
    </>
}