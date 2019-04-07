export class Hotel {

    constructor(
        public id: string,
        public name: string,
        public starts: number,
        public price: number,
        public images: string,
        public amenities: Array<string>
    ) { }
}
