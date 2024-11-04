func displayGraph(name: String, age: Int) {
    print(name + " " + String(age))
}

func displayGraphOmit(_ name: String, _ age: Int) {
    print(name + " " + String(age))
}

displayGraph(name: "Luis", age: 20)
displayGraphOmit("Luis", 20)
