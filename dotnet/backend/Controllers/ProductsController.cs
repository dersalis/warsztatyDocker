using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet("Get")]
        [EnableCors("VulconPolicy")]
        public ActionResult<IEnumerable<Customer>> Get()
        {
            var result = _context.Customers;
            return new JsonResult(result, new JsonSerializerSettings(){ Formatting = Formatting.Indented });
        }
    }
}