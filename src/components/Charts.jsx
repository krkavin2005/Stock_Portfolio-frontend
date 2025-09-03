import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, XAxis, YAxis, Bar } from "recharts";

const Charts = (props) => {
    const { list } = props
    const data = list.map((el) => {
        return { name: el.company, value: el.qty * el.cur_price }
    })
    const data2 = list.map((el) => {
        return { name: el.symbol, value: ((el.cur_price - el.buy_price) / el.buy_price * 100).toFixed(2) }
    })
    const COLOR = Array.from({ length: data.length }, (_, i) => {
        return `hsl(${(i * 360) / data.length},70%,50%)`
    })
    return (
        <div className="charts">
            <span>
                <h2>Asset Allotment</h2>
                <PieChart width={200} height={300}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={60}>
                        {data.map((el, index) => <Cell key={index} fill={COLOR[index]} />)}
                    </Pie>
                    <Tooltip/>
                    <Legend iconType="circle" />
                </PieChart>
            </span>
            <span>
                <h2>Stock Performance</h2>
                <BarChart width={200} height={300} data={data2}>
                    <XAxis dataKey="name" />
                    <YAxis unit="%" />
                    <Bar dataKey="value">
                        {data2.map((el, index) => {
                            return <Cell key={index} fill={el.value > 0 ? "rgb(132,227,203)" : "rgb(214,93,93)"} />
                        })}
                    </Bar>
                    <Tooltip cursor={false} contentStyle={{backgroundColor:"white"}}/>
                </BarChart>
            </span>
        </div>
    )
}

export default Charts;