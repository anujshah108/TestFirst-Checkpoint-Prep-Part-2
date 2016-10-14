function Mammal(nm){
	this.name = nm
	this.offspring = []
}

Mammal.prototype.sayHello = function(){
	return "My name is " + this.name + ", I'm a Mammal"
}

Mammal.prototype.haveBaby = function(){
    var nam = 'Baby ' + this.name
	var child = {
		name: nam
	}
	this.offspring.push(child)
	return child
}


function Cat(name, color){
	this.color = color
	Mammal.call(this, name, 'Cat');
	this.haveBaby = function(Color){
    var nam = 'Baby ' + this.name
	var child = new Cat(nam, Color)
	this.offspring.push(child)
	return child
}
}
Cat.prototype = Object.create(Mammal.prototype)

Cat.prototype.constructor = Cat


