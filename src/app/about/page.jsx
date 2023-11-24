const About = () => {
    return (
      <div className="flex justify-center border-b-2 border-black ">
        <div className="w-[100%]  ">
          <div className="relative   p-6 h-[100%]">
            <p className="font-bold text-3xl">ABOUT KING SIGMA</p>
            <p className="pt-6 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium et cum aliquam magni qui placeat itaque odit ratione
              aspernatur debitis! Enim eius deleniti officia sequi accusantium
              autem unde aut ipsam.
            </p>  
            <p className="pt-6 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium et cum aliquam magni qui placeat itaque odit ratione
              aspernatur debitis! Enim eius deleniti officia sequi accusantium
              autem unde aut ipsam.Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Laudantium et cum aliquam
            </p>

            <p
              className="text-3xl absolute bottom-3 w-[50%]  leading-tight
             font-semibold "
            >
              BREAK THROUGH THE WALL OF DULLNESS @2023
            </p>
          </div>
        </div>

        <div className="border-l-2  w-[100%] border-black">
          <img className="h-[660px]" src="/images/gentle.jpeg" />
        </div>
      </div>
    );
}
 
export default About;