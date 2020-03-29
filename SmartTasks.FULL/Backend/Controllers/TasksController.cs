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
                Descryption = "Umyś dziś czarne auto",
                CreateDate = DateTime.Now.AddDays(-7),
                FinishDate = null,
                IsFinish = true,
                Status = 0
            },
            new SmartTask{
                Id = 1,
                Name = "Malowanie ścian",
                Descryption = "Malowanie ścian w kuchni i pokoju",
                CreateDate = DateTime.Now.AddDays(-9),
                FinishDate = null,
                IsFinish = false,
                Status = 1
            },
            new SmartTask{
                Id = 3,
                Name = "Koszenie trawy",
                Descryption = "Trawa do skoszenie w ogrodzie",
                CreateDate = DateTime.Now.AddDays(-9),
                FinishDate = DateTime.Now,
                IsFinish = true,
                Status = 2
            }
        };


        // [EnableCors] 
        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var result = _tasks;
            return new JsonResult(result);
        }

        [EnableCors] 
        [HttpGet("[action]")]
        public IActionResult GetById(int id)
        {
            var result = _tasks.FirstOrDefault(t => t.Id == id);
            if(result == null) return NotFound("Nie znaleziono elementu");
            return new JsonResult(result);
        }

        // [EnableCors] 
        [HttpPost("[action]")]
        public IActionResult Add([FromBody] SmartTask task)
        {
            if(task == null) return BadRequest();
            if(task.CreateDate == null) task.CreateDate = DateTime.Now;
            if(task.FinishDate == null) task.IsFinish = false;
            _tasks.Add(task);
            return Ok();
        }

        // [EnableCors] 
        [HttpGet("[action]")]
        public IActionResult RemoveById(int id)
        {
            var result = _tasks.FirstOrDefault(t => t.Id == id);
            if(result == null) return NotFound("Nie znaleziono elementu");
            _tasks.Remove(result);
            return new JsonResult(result);
        }
    }
}
