using System;
using System.ComponentModel.DataAnnotations;

namespace SmartTasks.Models
{
    public class SmartTask
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? FinishDate { get; set; }
        public bool IsFinish { get; set; }
    }
}