using Microsoft.AspNetCore.Mvc;

namespace testemvc.Controllers
{
    public class RegistroController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}