export class Hotel {

    constructor(
        public id: string,
        public name: string,
        public stars: number,
        public price: number,
        public images: string,
        public amenities: Array<string>
    ) { }
}
