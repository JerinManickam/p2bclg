import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faArrowCircleLeft,faUsers } from "@fortawesome/free-solid-svg-icons";
import '../styles/editor.css'
import Editor1 from "../componets/editor1";
import Editor2 from "../componets/editor2";
import {Link} from 'react-router-dom'

const Editor = () => {

    const [page, setPage] = useState(0);
    const FormTitles = ["Editor 1", "Editor 2"];
    const PageDisplay = () => {
        if (page === 0) {
            return <Editor1 />
        } else if (page == 1) {
            return <Editor2 />
        }
    }

    return (
        <main>
            {/* Click next page line size increase */}
            <div className="progressbar"></div>

            {/* from-container */}
            <div className="formcontainer">

                {/* header */}
                <div className="header mt-10 flex justify-between mx-5">
                    <h2 className=" text-2xl">{FormTitles[page]}</h2>

                    <Link to='/selectuser'>
                        <FontAwesomeIcon className="text-xl" icon={faArrowCircleLeft} />
                         </Link>
                </div>

                {/* body */}
                <div className="body">{PageDisplay()}</div>


                {/*-----------------------------------------------------------------------------------------------------------*/}
                {/* footer */}
                <footer className="footer">

                    {/* Btn-container */}
                    <div className="btn-continer grid grid-cols-2 p-2 place-items-center">
                        {/* Btn-1 */}
                        <button className='btnOne'
                            disabled={page == 0}
                            onClick={() => setPage((currPage) => currPage - 1)}>
                            <FontAwesomeIcon className="text-2xl" icon={faUsers} />
                            <h2 className="text-sm">Team A</h2>
                        </button>

                        {/* Btn-2 */}
                        <button className='btnOne'
                            disabled={page == 1}
                            onClick={() => setPage((currPage) => currPage + 1)}>
                            <FontAwesomeIcon className="text-2xl" icon={faUsers} />
                            <h2 className="text-sm">Team B</h2>
                        </button>
                    </div>
                </footer>
            </div>
        </main>
    )
}
export default Editor