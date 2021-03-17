class ArrayList {
   constructor() {
     this.data = {};
     this.length = 0;
   }

    /*

    */
    insertAt(index, value) {
      for(let i = this.length; i >= index; i--) {
        let r = i-1;
        this.data[i] = this.data[r];
      }
      this.data[index] = value;
      this.length++;
      return this.data;

    }

    push(value) {
      this.data[this.length]=value;
      this.length++;
      return this.data;
    }

    pop() {
      let item = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return item;
    }

    get(index) {
      let length = this.length - 1
      if(index > length || index < 0) {
        return null
      }
     return  this.data[index];
    }


    delete(index) {

      for(let i = index; i < this.length - 1; i++) {
       this.data[i] = this.data[i+1];
      }

      delete this.data[this.length-1];
      this.length--;

      return this.data;

    }

    reverse () {

    }
}

let array  =new ArrayList();

array.push("a");
array.push("b");
array.push("c");
array.push("d");
array.push("e");
array.insertAt(2,"aa")
console.log("array", array);

