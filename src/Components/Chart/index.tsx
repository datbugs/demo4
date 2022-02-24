import TableAPI from "Components/Table/API/tableAPI";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Item, EditableCellProps } from "../Table/interface";

interface Props {
  item: Item[]
}

const DemoChart = () => {

  const [dataChart, setDataChart] = useState<Item[]>([])
  const [category, setCategory] = useState<string[]>([])
  const [dataLine, setDataLine] = useState<number[]>([])
  const [dataColumn, setDataColumn] = useState<number[]>([])


  useEffect(() => {

    const fetchData = async () => {
      const nameChart: string[] = [];
      const pointChart: number[] = [];
      const wageChart: number[] = [];
      try {
        const response = await TableAPI.getAll();
        console.log(response.data, "chart")
        setDataChart(response.data);
        dataChart.map(item => {
          nameChart.push(item.name);
          pointChart.push(item.point);
          wageChart.push(item.wage);
        })
        console.log(nameChart, "gxxx")
        setCategory(nameChart);
        setDataLine(pointChart);
        setDataColumn(wageChart);
        
      } catch (error) {
        console.log(error, "Error")
      }
    }
    
    fetchData();
    
  }, []);
  
  return (
    <Chart options={{
      chart: {
        id: 'apexchart-example'
      },
      markers: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
     },
      xaxis: {
        categories: category
      },
      yaxis: [{
        title: {
          text: 'Point',
        },
      
      }, {
        opposite: true,
        title: {
          text: 'Wege'
        }
      }]
    }}
      series={
      [{
        name: 'Point',
        data: dataLine,
        type: "line",
      },
      {
        name: 'Wage',
        data: dataColumn,
        type: "column"
      }]
    }
      width={"100%"} height={500} />
  )
}

export default DemoChart;