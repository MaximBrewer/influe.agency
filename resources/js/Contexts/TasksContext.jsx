import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import ru from "./moment.ru"
import Task from "@/Components/Modals/TaskForm";
import { router, useForm } from "@inertiajs/react";
moment.locale('ru', ru);

const TasksContext = React.createContext();

TasksContext.propTypes = {
    children: PropTypes.element.isRequired
};

const TasksProvider = (props) => {

    const { children, executors, auth } = props

    const [modal, setModal] = useState(null)

    const [lists, setLists] = useState(props.lists);

    const { data, setData, delete: destroy } = useForm();

    const addTask = () => {
        setModal(<Task task={null} executors={executors} auth={auth} />)
    }

    const editTask = (task) => {
        setModal(<Task task={task} executors={executors} auth={auth} />)
    }

    const dropTask = (id) => {
        destroy(route('admin.tasks.destroy', {
            task: id
        }), {
            onSuccess: ({ props }) => {
                props && props.lists && setLists(props.lists)
                setModal(null)
            }
        });
    }

    useEffect(() => {
        setInterval(() => {
            router.reload({ only: ['lists'] }, {
                onSuccess: (props) => {
                    console.loe(props)
                    setLists(props.lists)
                }
            })
        }, 10000)
    }, [])

    useEffect(() => {
        setLists(props.lists)
    }, [props.lists])

    return <TasksContext.Provider
        value={{
            auth,
            addTask,
            editTask,
            dropTask,
            lists,
            setModal,
            setLists,
            executors
        }}
    >
        <div className={``}>
            {children}
        </div>
        {

            modal ? <div className={`flex flex-col items-center fixed overflow-y-auto top-0 left-0 w-full h-full bg-black bg-opacity-50 z-100 py-6`} onClick={() => setModal(null)} >
                <div className={`mx-2 relative mx-auto py-8 px-8 bg-white rounded-2xl flex flex-col`} onClick={(e) => {
                    document.dispatchEvent(new Event('clickinmodal'))
                    e.stopPropagation()
                }}>
                    <div>
                        {modal}
                    </div>
                </div>
            </div> : ``
        }
    </TasksContext.Provider>
}

const useTasks = () => {
    const context = React.useContext(TasksContext);

    if (context === undefined) {
        throw new Error(`useTasks must be used within a TasksProvider`);
    }

    return context;
}

export { TasksProvider, useTasks };
