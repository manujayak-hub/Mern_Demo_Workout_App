import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {

    const {dispatch} = useWorkoutContext()

    const [title , settitle] = useState('')
    const [load , setload] = useState('')
    const [reps , setreps] = useState('')
    const [error , setError] = useState('')

    const [emptyFields, setemptyFields] = useState([])
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setemptyFields(json.emptyFields)
        }
        if(response.ok){
            settitle('')
            setload('')
            setreps('')
            setError(null)
            setemptyFields([])
            console.log('new workout added', json)
            dispatch({type: 'CREATE_WORKOUT',payload: json})
        }
    }
    

    return ( 

        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Workout</h3>

            <label>Exercise Title :</label>
            <input type ="text" onChange={(e) => settitle(e.target.value)}
            value = {title}
            className={emptyFields.includes('title')  ? 'error' : ''}
            />

            <label>Load (in kg) :</label>
            <input type ="text" onChange={(e) => setload(e.target.value)}
            value = {load}
            className={emptyFields.includes('load')  ? 'error' : ''}
            />

            <label>Reps :</label>
            <input type ="text" onChange={(e) => setreps(e.target.value)}
            value = {reps}
            className={emptyFields.includes('reps')  ? 'error' : ''}
            />

            <button>Add Workout</button>

            {error && <div className="error" >{error}</div>}

        </form>
     );
}
 
export default WorkoutForm;