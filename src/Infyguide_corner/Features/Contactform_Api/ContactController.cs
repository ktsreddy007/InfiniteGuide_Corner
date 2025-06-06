using ContactFormApi.Features.ContactForm_Api;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace ContactFormApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly string filePath = "contacts.json";

        [HttpPost]
        public IActionResult Post([FromBody] ContactForm contact)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            List<ContactForm> contacts = new();

            if (System.IO.File.Exists(filePath))
            {
                var json = System.IO.File.ReadAllText(filePath);
                if (!string.IsNullOrWhiteSpace(json))
                    contacts = JsonSerializer.Deserialize<List<ContactForm>>(json) ?? new List<ContactForm>();
            }

            contacts.Add(contact);

            var updatedJson = JsonSerializer.Serialize(contacts, new JsonSerializerOptions { WriteIndented = true });
            System.IO.File.WriteAllText(filePath, updatedJson);

            return Ok(new { message = "Contact saved successfully." });
        }
    }
}