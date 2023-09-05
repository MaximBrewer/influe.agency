import DangerButton from "../DangerButton";

export default (props) => {
    const { data, setData, handleOnChange, errors, setTab, menu } = props;
    return <>
        <div className={`bg-blue-80 rounded-lg p-5`}>
            <textarea
                className="w-full min-h-[40rem] border-0 rounded"
                onChange={e => setData('other', e.target.value)}
                value={data.other}
            />
        </div>
        <div className={`flex justify-end py-8`}>
            <DangerButton size="sm" onClick={e => setTab(menu.data[3])}>Завершить</DangerButton>
        </div>
    </>
}
