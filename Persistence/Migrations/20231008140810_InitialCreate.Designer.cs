﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

#nullable disable

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20231008140810_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("Domain.Apartment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("ApartmentNumber")
                        .HasColumnType("TEXT");

                    b.Property<string>("Block")
                        .HasColumnType("TEXT");

                    b.Property<string>("Floor")
                        .HasColumnType("TEXT");

                    b.Property<string>("OwnerName")
                        .HasColumnType("TEXT");

                    b.Property<string>("OwnerPhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<string>("OwnerSurname")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Apartments");
                });
#pragma warning restore 612, 618
        }
    }
}
