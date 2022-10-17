
type TechCardProps = {
    name: string;
    description: string;
};

function TechCard( { name, description }: TechCardProps ) {
    return (
        <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
        </section>
    );
}

export default TechCard