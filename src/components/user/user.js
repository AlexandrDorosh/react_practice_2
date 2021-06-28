import './user.css';

export default function User({item, selectPost}){
    return(
        <div>
            {item.id} - {item.name} - <button onClick={() => {selectPost(item.id)}}>show post</button>
        </div>
    )
}