import Link from "next/link";
import { url } from "../../constant/index"


interface Ibooks {
    id: number,
    name: string,
    available: boolean,
    type: string,
}
const Books = async () => {
    const responce = await fetch(`${url}/books`, {
        cache: "force-cache",
    });
    const books = await responce.json() as Ibooks[];
    return (
    <div>
          <h1 className="text-3xl font-bold bg-gray-600 text-white">Books</h1>
          <div>
                {
                    books.map((book) => (
                        <Link href={`/books/${book.id}`} key={book.id}>
                            <div>
                            <h2>{book.name}</h2>
                        </div>
                        </Link>
                    ))
              }
          </div>
    </div>
  )
}

export default Books