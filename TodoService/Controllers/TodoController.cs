using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace TodoService.Controllers
{
    [EnableCors("CorsPolicy")]
    public class TodoController : Controller
    {
        public static List<TodoItem> Todos = TodoItem.CreateList();

        [HttpGetAttribute("api/todos")]
        public List<TodoItem> GetTodos()
        {
            return Todos;
        }


        [HttpGet("api/todo/{title}")]
        public TodoItem GetTodo(string title)
        {
            var todo = Todos.FirstOrDefault( td=> td.Title == title) ;
            return todo;
        }

        [HttpDelete("api/todo/{title}")]
        public bool DeleteTodo(string title) 
        {   
            var match = Todos.FirstOrDefault( td=> td.Title == title) ;
            if (match != null)
                Todos.Remove(match);

            return true;
        }

        
        [HttpPut("api/todo")]
        [HttpPost("api/todo")]
        public bool UpdateTodo([FromBody] TodoItem todo) {
            var existingTodo = Todos.FirstOrDefault( td =>  td.Title == todo.Title);
            if (existingTodo != null) {
                int idx = Todos.IndexOf(existingTodo);
                Todos[idx] = todo;
            }
            else
                Todos.Insert(0,todo);
            
            return true;
        }

        [HttpGet("api/status")] 
        public object Status(){
            return new {
                OS = System.Runtime.InteropServices.RuntimeInformation.OSDescription,
                MachineName = System.Environment.MachineName
            };
        }       
    }

    public class TodoItem {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Completed { get; set; }
        public DateTime  Entered { get; set; }

        public static List<TodoItem> CreateList(){
            return new List<TodoItem> {
                new TodoItem {
                    Title = "PadNug Presentation",
                    Description = "Presentation at Intel Hawthorne Farms campus. Angular and ASP.NET ",
                    Entered = DateTime.UtcNow,
               },
                new TodoItem {
                    Title = "Hang out at the Pub after Presentation",
                    Description = "Light beer swilling and socializing after the presentation into the weee hours.",
                    Entered = DateTime.UtcNow.AddHours(1)
               },
               new TodoItem {
                   Title = "Drive back to Hood River",
                   Description = "Make the long slog of a drive back home to Hood River.",
                   Entered = DateTime.UtcNow.AddHours(3)
               },
               new TodoItem {
                   Title = "Get a good night's Sleep",
                   Description = "Snoooooore!!!!",
                   Entered = DateTime.UtcNow.AddHours(3)
               }
            };

        }
    }
}
