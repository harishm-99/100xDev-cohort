export function CreateTodo() {
    
    return (
        <div>
            <input style={{margin:10 , padding:10}} type="text" placeholder="title" /><br/>
            <input style={{margin:10 , padding:10}} type="text" placeholder="description" /><br/>

            <button style={{margin:10 , padding:10}}>Add a Todo</button>
        </div>
    )
}