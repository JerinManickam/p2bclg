import React, { useEffect ,useState} from "react";
import "../styles/invoice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import DBOp from "../db/dbservices";
const TableHead = [
    {
        first: "Description",
        second: "Date",
        third: "Amount"
    }
];

const TableData = [
    {
        dsdata: "Festival Tax",
        date: "20/12/2023",
        quantity: 1
    },
    {
        dsdata: "Festival Tax",
        date: "20/12/2023",
        quantity: 1
    },
    {
        dsdata: "Festival Tax",
        date: "20/12/2023",
        quantity: 1
    },
    {
        dsdata: "Festival Tax",
        date: "20/12/2023",
        quantity: 1
    },
    {
        dsdata: "Festival Tax",
        date: "20/12/2023",
        quantity: 1
    },
];

const Invoice = () => {
    const [tax,setTaxes]= useState(null)
    const [total,setTotal]= useState(null)

    let tota = 0;
    let taxes = DBOp.getTaxes();
    useEffect(()=>{
        taxes.once(data=>{
           let taxto = JSON.parse(data.taxes);
            setTaxes(data?taxto:[])
            tota = 0;
            taxto.map(data=>{
                tota = tota+ data.amount;
            })

            setTotal(tota);
            // console.log(taxType)
        })

    },[])

    return (
        <main className='bgimg'>
            <div className='overlay'>
                <Link to='/incomeprofile' className="flex justify-end items-center mt-10 mx-5">
                    <FontAwesomeIcon className="text-xl" icon={faCircleArrowLeft}/>
                </Link>
            <h2 className="text-center text-2xl mt-5">Amout Calculation</h2>

            {/* Table */}
            <section className="mt-8">
                <table className="table ">
                    <thead className="head-table-blur table-head-blur">
                        {
                            TableHead.map(data => {
                                return (
                                    <tr className=" h-10">
                                        <th>{data.first}</th>
                                        <th>{data.second}</th>
                                        <th>{data.third}</th>
                                    </tr>
                                )
                            })
                        }
                    </thead>

                    <tbody className=" text-center">
                        {
                            tax?tax.map(data => {

                                return (
                                    <tr className='tbdatarow table-blur'>
                                        <td className="py-3 text-sm text-gray-700 ">{data.id}</td>
                                        <td className="text-sm text-gray-700 ">{data.data}</td>
                                        <td className="text-sm text-gray-700 ">{data.amount}</td>
                                    </tr>
                                )
                            }):""
                        }
                    </tbody>
                </table>
            </section>
            {/* Total */}
            <section className="mx-auto mt-10">
                <table className=" w-4/5">
                    <thead>
                        <tr><th className="text-right">Total Amount</th> <td className="text-right text-gray-600">&#8377; {total}</td> </tr>
                        <tr><th className="text-right">Total Tax</th> <td className="text-right text-gray-600">&#8377; {total}</td> </tr>
                        <tr className='tbdatarow'><th className="text-right ">Total</th> <td className="text-right">&#8377; {total}</td> </tr>
                    </thead>
                </table>
            </section>
            </div>
        </main>
    )
}
export default Invoice