import { url } from "../../../constant/index"
interface Iprops {
    params: {
        id: string
    }
}

interface Ibook {
    id: number,
    name: string,
    author: string,
    type: string,
    price: number,
    'current-stock': number,
    available: boolean,
}

const BooksPage = async ({ params }: Iprops) => {
    const responce = await fetch(`${url}/books/${params.id}`, {
        cache: 'no-store',
    });
    const books = await responce.json() as Ibook;
    console.log(books)
    return (
        <main>
            <div>
                <h1>Books Details</h1>
                <h2>Books Id is {params.id}</h2>
                <h2>Book Name is {books.name}</h2>
                <h2>Book Author is {books.author}</h2>
                <h2>Book Price is {books.price}</h2>
                <h2>Book Type is {books.type}</h2>
                <h2>Book CurrentStock is {books["current-stock"]}</h2>
                <h2>Book Available is {books.available}</h2>
            </div>
        </main>
    )
}

export default BooksPage