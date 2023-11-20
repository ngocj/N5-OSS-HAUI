import { CarouselDefault } from "../component/carousel"
import { Trangchuimg } from "../component/imgtrangchu"


export const HomePage = () => {
    return (
        <div>
            <div class="pt-32" >
                <CarouselDefault />
            </div>
            <Trangchuimg />
        </div>
    )
}