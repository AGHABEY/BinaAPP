using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using System.Runtime.CompilerServices;
using Application.Apartments;

namespace API.Controllers
{
    public class ApartmentsContoller : BaseApiController
    {
        private readonly Mediator _mediator;
       public ApartmentsContoller(Mediator mediator)
       {
          _mediator=mediator;
       }   

       [HttpGet] //api/apartments
       public async Task<ActionResult<List<Apartment>>> GetApartments()
       {
         return await _mediator.Send(new List.Query());
       }

       [HttpGet("{id}")]
       public async Task<ActionResult<Apartment>> GetApartment(Guid id)
       {
          return Ok();
       }
    }

    
}