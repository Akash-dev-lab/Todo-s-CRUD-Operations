import { Link } from 'react-router-dom'

const ReceipeCard = (props) => {

    const { id, title, image, chef, des } = props.reciepe

    return (
        <Link to={`/receipes/detail/${id}`} className='block duration-150 hover:scale-101 mr-3 mb-3 w-[23vw] rounded overflow-hidden shadow'>
            <img className='object-cover w-full h-[20vh]' src={image} alt="" />
            <h1 className='mt-2 font-black px-2 pt-3'>{title}</h1>
            <small className='px-2 text-red-400'>{chef}</small>

            <p className='px-2 pb-3'>
                {(des ? des.slice(0, 100) : '')}<small className='text-blue-400'>{des && des.length > 100 ? '...more' : ''}</small>
            </p>
        </Link>
    )
}

export default ReceipeCard
