import { GeistSans } from 'geist/font/sans'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import classnames from 'classnames'
import BooleanDisplay from './BooleanDisplay'

export default function FetchData() {
    const { isPending, data, error, isFetching } = useQuery({
        queryKey: ['local_api_testing'],
        queryFn: () => axios.get("http://localhost:3000/api/v1/")
            .then(res => res.data)
    })
    return (
        <>
            <h1 className={classnames(GeistSans.className, 'bg-orange-600 shadow-orange-950 text-white')}>Geist Testing</h1>
            <BooleanDisplay booleanInput={isPending} label="isPending" />
            <BooleanDisplay booleanInput={isFetching} label="isFetching" />
            <BooleanDisplay booleanInput={Boolean(error)} label="Has Error" valueReplacement={error?.message} />
            <BooleanDisplay booleanInput={Boolean(data)} label="Has Data" valueReplacement={data} />
        </>
    )
}
