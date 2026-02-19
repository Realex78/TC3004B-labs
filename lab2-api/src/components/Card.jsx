export const Card = ({id, name, sprites = [], author}) => {
    return (
        <section style = {{height:200}}>
            <h2 className="text-capitalize">#{id} - { name } </h2>
            <h3>{author}</h3>
            { /*imagenes */ }
            <div> {
                sprites.map(sprite => (
                    <img src={sprite} key={sprite} alt={name} height={"120 px"}/>
                ))
            }
            </div>
        </section>
    )
}