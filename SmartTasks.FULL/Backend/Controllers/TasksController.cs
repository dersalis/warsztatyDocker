using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SmartTasks.Models;

namespace SmartTasks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private static List<SmartTask> _tasks = new List<SmartTask>(){
            new SmartTask{
                Id = 0,
                Name = "Mycie samochodu",
                CreateDate = DateTime.Now.AddDays(-7),
                FinishDate = DateTime.Now,
                IsFinish = true
            },
            new SmartTask{
                Id = 1,
                Name = "Malowanie ścian",
                CreateDate = DateTime.Now.AddDays(-9),
                FinishDate = null,
                IsFinish = false
            }
        };


        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var result = _tasks;
            return new JsonResult(result);
        }

        [HttpPost("[action]")]
        public IActionResult GetById(int id)
        {
            var result = _tasks.Where(t => t.Id == id);
            if(result == null) return NotFound("Nie znaleziono elementu");
            return new JsonResult(result);
        }

        [HttpPost("[action]")]
        public IActionResult Add([FromForm] SmartTask task)
        {
            if(task == null) return BadRequest();
            if(task.CreateDate == null) task.CreateDate = DateTime.Now;
            if(task.FinishDate == null) task.IsFinish = false;
            _tasks.Add(task);
            return Ok();
        }
    }
}
