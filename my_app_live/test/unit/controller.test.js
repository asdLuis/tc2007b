const TodoController = require("../../controllers/todo_controller");
const TodoModel = require("../../models/todo_model");


const httpMocks = require("node-mocks-http");
const newTask = require("../../mockups/todo_mockup.json");

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    res = httpMocks.createResponse();
    req = httpMocks.createRequest();
    next = null;
})

describe("Test create method exists", () => {
    it("Should have a create method", () => {
        expect(typeof TodoController.todoCreate).toBe("function");
    });

    it("Should call todoModel.create", () => {
        req.body = newTask;
        TodoController.todoCreate(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTask);
    })

    it("Should return 201 status code", () => {
        req.body = newTask;
        TodoController.todoCreate(req, res, next);
        expect(res.statusCode).toBe(201);
    })
})