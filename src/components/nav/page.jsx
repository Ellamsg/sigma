import Link from "next/link";



const Nav = () => {
    return (  


        <div className="text-center">
            <Link href='/'>Home</Link>
            <Link href='/singleitems'>singleitem</Link>
        </div>
    );
}
 
export default Nav;