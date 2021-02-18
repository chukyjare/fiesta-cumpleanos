export class Validacion{
   
    
    constructor(private label: string,private control: string,private name: string) {
        this.label=label;
        this.control=control;
        this.name=name;
    }
    /**
     * Getter $label
     * @return {string}
     */
	public get $label(): string {
		return this.label;
	}

    /**
     * Getter $control
     * @return {string}
     */
	public get $control(): string {
		return this.control;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

}