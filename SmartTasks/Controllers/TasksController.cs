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
        private List<SmartTask> _tasks = new List<SmartTask>(){
            new SmartTask{
                Id = 0,
                Name = "Mycie samochodu",
                CreateDate = DateTime.Now.AddDays(-7),
                FinishDate = DateTime.Now,
                IsFinish = true
            },
            new SmartTask{
                Id = 0,
                Name = "Malowanie ścian",
                CreateDate = DateTime.Now.AddDays(-9),
                FinishDate = null,
                IsFinish = false
            }
        };


        [HttpGet("Get")]
        //[EnableCors("SmartTasksPolicy")]
        public IActionResult Get()
        {
            var result = _tasks;
            return new JsonResult(result);
        }
    }
}
