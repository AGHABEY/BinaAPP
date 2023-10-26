using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Application.Apartments;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ApartmentsContoller : BaseApiController
    {
    
       [HttpGet] //api/apartments
       public async Task<ActionResult<List<Apartment>>> GetApartments()
       {
         return await Mediator.Send(new List.Query());
       }

       [HttpGet("{id}")]
       public async Task<ActionResult<Apartment>> GetApartment(Guid id)
       {
          return await Mediator.Send(new Details.Query{Id = id});
       }

       [HttpPost]
       public async Task<IActionResult> CreateApartment(Apartment apartment)
       {
         await Mediator.Send(new Create.Command {Apartment = apartment});

         return Ok();
       }

       [HttpPut("{id}")]
       public async Task<IActionResult> EditApartment(Guid id, Apartment apartment)
       {
          apartment.Id=id;
          await Mediator.Send(new Edit.Command{Apartment = apartment});
          return Ok();
       }
       [HttpDelete("{id}")]
       public async Task<IActionResult> DeleteActivity(Guid id)
       {
          await Mediator.Send(new Delete.Command {Id = id});
          return Ok();
       }
    }

    
}