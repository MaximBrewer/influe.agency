import Grafik from "@/../img/card/kinesio/i1.png"

export default (props) => {

    const { data, setData, errors } = props;

    return <div className={`bg-blue-80 rounded-lg p-5 mb-8`}>

        <div className="font-medium mb-4">III. Оценка паттернoв движения маленького ребенка</div>
        <div>
            <img src={Grafik} className="w-full my-8 block" />
        </div>
    </div>
}
